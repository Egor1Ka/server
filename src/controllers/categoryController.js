import { httpResponse, httpResponseError } from "../utils/http/httpResponse.js";
import { generalStatus } from "../utils/http/httpStatus.js";
import categoryServices from "../services/categoryServices.js";

// Создать категорию
const createCategory = async (req, res) => {
  try {
    const {
      name,
      slug,
      parentId,
      description,
      status,
      image,
      imageType,
      attributes,
    } = req.body;

    if (!name || !slug) {
      httpResponseError(
        res,
        generalStatus.BAD_REQUEST,
        "name и slug обязательны"
      );
      return;
    }

    const imageBuffer = image ? Buffer.from(image, "base64") : undefined;

    const category = await categoryServices.createCategory({
      status,
      description,
      attributes,
      name,
      slug,
      parentId,
      image: imageBuffer,
      imageType,
      //createdBy,
    });
    httpResponse(res, generalStatus.SUCCESS, category);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Получить одну категорию
const getCategory = async (req, res) => {
  try {
    console.log("getCategoryById", typeof req.params.id);
    console.log("getCategoryById", req.params.id);
    const category = await categoryServices.getCategoryById(req.params.id);

    if (!category) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Category not found");
      return;
    }

    const result = {
      ...category.toObject(),
      image: category.image ? category.image.toString("base64") : null,
    };

    httpResponse(res, generalStatus.SUCCESS, result);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Получить все категории
const getCategories = async (req, res) => {
  try {
    const filter = {}; // фильтры по необходимости
    const categories = await categoryServices.getCategories(filter);
    const result = categories.map((cat) => ({
      ...cat.toObject(),
      image: cat.image ? cat.image.toString("base64") : null,
    }));
    httpResponse(res, generalStatus.SUCCESS, result);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Обновить категорию
const updateCategory = async (req, res) => {
  try {
    const { image, ...rest } = req.body;
    // image если есть, конвертируй в буфер!
    const imageBuffer = image ? Buffer.from(image, "base64") : undefined;

    const category = await categoryServices.updateCategory(req.params.id, {
      ...rest,
      image: imageBuffer,
    });

    if (!category) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Category not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, category);
  } catch (error) {
    console.log("error", error);
    httpResponseError(res, error);
  }
};

// Удалить категорию
const deleteCategory = async (req, res) => {
  try {
    const deleted = await categoryServices.deleteCategory(req.params.id);
    if (!deleted) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Category not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, { message: "Category deleted" });
  } catch (error) {
    httpResponseError(res, error);
  }
};

export {
  createCategory,
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
