const prefix = 'swiper-';
const containerName = `${prefix}container`;
const wrapperName = `${prefix}wrapper`;
const slideName = `${prefix}slide`;
const prevName = `${prefix}prev`;
const nextName = `${prefix}next`;
const paginationName = `${prefix}pagination`;
const scrollbarName = `${prefix}scrollbar`;

export default {
  containerName,
  wrapperName,
  slideName,
  prevName,
  nextName,
  paginationName,
  scrollbarName,

  // Selectors
  containerSelector: `[data-${containerName}]`,
  wrapperSelector: `[data-${wrapperName}]`,
  slideSelector: `[data-${slideName}]`,
  prevSelector: `[data-${prevName}]`,
  nextSelector: `[data-${nextName}]`,
  paginationSelector: `[data-${paginationName}]`,
  scrollbarSelector: `[data-${scrollbarName}]`,

  // IDs
  containerId: `data-${containerName}`,
  wrapperId: `data-${wrapperName}`,
  slideId: `data-${slideName}`,
  prevId: `data-${prevName}`,
  nextId: `data-${nextName}`,
  paginationId: `data-${paginationName}`,
  scrollbarId: `data-${scrollbarName}`,
}
