import { createSlice } from '@reduxjs/toolkit';
import { getTags } from './tags.actions';

const initialState = {
  tags: [],
  order: 'desc',
  sort: 'popular',
  pageSize: 20,
  page: 1,
  totalResults: 1,
  isLoading: false,
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setSort(state, action) {
      state.sort = action.payload;
    },
    setOrder(state, action) {
      state.order = action.payload;
    },
    setPageSize(state, action) {
      state.pageSize = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTags.fulfilled, (state, action) => {
      state.tags = action.payload.items;
      state.totalResults = action.payload.total;
      state.isLoading = false;
    });
    builder.addCase(getTags.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTags.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setSort, setOrder, setPageSize, setPage } = tagsSlice.actions;

export const tagsReducer = tagsSlice.reducer;
