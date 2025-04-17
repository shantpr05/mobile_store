// utils/apiFeatures.js
class APIFeatures {
    constructor(query, queryStr) {
      this.query = query;         // Mongoose query (e.g., Product.find())
      this.queryStr = queryStr;   // Express req.query
    }
  
    // Search by keyword (brand or model)
    search() {
      if (this.queryStr.keyword) {
        const keyword = {
          $or: [
            { brand: { $regex: this.queryStr.keyword, $options: 'i' } },
            { model: { $regex: this.queryStr.keyword, $options: 'i' } }
          ]
        };
        this.query = this.query.find(keyword);
      }
      return this;
    }
  
    // Filter by fields like price, ram, processor, etc.
    filter() {
      const queryCopy = { ...this.queryStr };
  
      // Fields to remove
      const removeFields = ['keyword', 'page', 'limit', 'sort'];
      removeFields.forEach(key => delete queryCopy[key]);
  
      // Convert filter operators (gte, lte)
      let queryStr = JSON.stringify(queryCopy);
      queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
  
      this.query = this.query.find(JSON.parse(queryStr));
      return this;
    }
  
    // Pagination
    paginate(resultsPerPage) {
      const currentPage = Number(this.queryStr.page) || 1;
      const skip = resultsPerPage * (currentPage - 1);
      this.query = this.query.limit(resultsPerPage).skip(skip);
      return this;
    }
  
    // Optional: Sorting
    sort() {
      if (this.queryStr.sort) {
        const sortBy = this.queryStr.sort.split(',').join(' ');
        this.query = this.query.sort(sortBy);
      } else {
        this.query = this.query.sort('-createdAt'); // default sorting
      }
      return this;
    }
  }
  
  module.exports = APIFeatures;
  