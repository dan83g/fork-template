import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button } from 'src/shared/buttons/Button/Button';
import { isUndefiend, isInvalidEmail } from 'src/shared/forms/lib/validation';
import { TextFormField } from 'src/shared/forms/fields/TextFormField';
import { PasswordFormField } from 'src/shared/forms/fields/PasswordFormField';

export type LoginFormValues = {
  email: string;
  password: string;
};
export type LoginFormErrors = Record<keyof LoginFormValues, string>;

export const LoginForm = memo(() => {
  const { t } = useTranslation();

  const validate = (values: LoginFormValues) => {
    const errors = {} as LoginFormErrors;
    if (isUndefiend(values.email)) errors.email = t('errors.ERR_IS_REQUIRED');
    if (!isUndefiend(values.email) && !isInvalidEmail(values.email)) errors.email = t('errors.ERR_INVALID_EMAIL');
    if (isUndefiend(values.password)) errors.password = t('errors.ERR_IS_REQUIRED');
    return errors;
  };

  const formManager = useFormik<LoginFormValues>({
    initialValues: { email: '', password: '' },
    onSubmit: (values, actions) => {
      console.log('values: ', values);
      actions.resetForm();
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <form>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        errors={errors.email}
        submitCount={submitCount}
        touched={touched.email}
        name="email"
        title={t('forms.LoginForm.email.title')}
        placeholder={t('forms.LoginForm.email.placeholder')}
      />

      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        name="password"
        title={t('forms.LoginForm.password.title')}
        placeholder={t('forms.LoginForm.password.placeholder')}
      />

      <Button type="submit" variant={'primary'} size="small" onClick={handleSubmit}>
        {t('forms.LoginForm.submitButton.title')}
      </Button>
    </form>
  );
});

LoginForm.displayName = 'LoginForm';
