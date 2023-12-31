import { Translation } from '@constants/translations'
import i18next from 'i18next'
import { mixed, object, string } from 'yup'

export const createAboutUsValidationSchema = object().shape({
  header: string().required(i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_HEADER) as string),
  paragraph: string().required(i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_PARAGRAPH) as string),
  imageDescription: string().required(
    i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_IMAGE_DESCRIPTION) as string
  ),
  imageURL: mixed<FileList>()
    .required(i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_IMAGE) as string)
    .test('fileType', i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_IMAGE) as string, (file) => {
      const File = file['0']

      return file && ['image/jpeg', 'image/png', 'image/jpg'].includes(File.type)
    }),
})

// import { Translation } from '@constants/translations'
// import i18next from 'i18next'
// import { mixed, object, string } from 'yup'
//
// export const createAboutUsValidationSchema = object().shape({
//   header: string().required(i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_HEADER) as string),
//   paragraph: string().required(i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_PARAGRAPH) as string),
//   imageDescription: string().required(
//     i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_IMAGE_DESCRIPTION) as string
//   ),
//   imageURL: mixed<FileList>()
//     .required(i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_IMAGE) as string)
//     .test(
//       'fileType',
//       i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_IMAGE) as string,
//       (file) => {
//         if (file && !['image/jpeg', 'image/png', 'image/jpg']) {
//           return false
//         }
//
//         return file && ['image/jpeg', 'image/png', 'image/jpg'].includes(File.type)
//       }
//     ),
// })
