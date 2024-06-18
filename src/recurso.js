<div
        className="h-screen flex lg:justify-end md:justify-end  justify-center  items-center w-full min-h-full bg-cover absolute
                    bg-[url('assets/images/fondo.png')]"
      >
        <Traslate />

        <section className="layout__login  border-none md:mr-56 lg:mr-56 opacity-80 flex flex-col text-white bg-[#000F6D]    ">
          <Header />
          <form onSubmit={onSubmit}>
            <div className="w-full flex flex-col">
              <label className="form__label" htmlFor="pais">
                {t("lbl_pais")}
              </label>

              <select className="form__input" {...register("pais")}>
                <option value="53">Colombia</option>
              </select>

              <label className="form__label" htmlFor="nombre">
                {t("lbl_NombreUsuario")}
              </label>

              <input
                className={`${
                  errors.nombre
                    ? "form__input--icon form__input form__input--error"
                    : "form__input--icon form__input"
                }`}
                type="text"
                placeholder={t("txt_ingresaNombre")}
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "El nombre de usuario es requerido",
                  },
                  minLength: {
                    value: 6,
                    message:
                      "El nombre de usuario debe tener al menos 6 caracteres",
                  },
                })}
              />

              {errors.nombre && <span>{errors.nombre.message}</span>}

              <label className="form__label" htmlFor="password">
                {t("lbl_contraseña")}
              </label>
              <div>
                <input
                  className={`${
                    errors.password
                      ? "form__input--icon form__input form__input--error"
                      : "form__input--icon form__input"
                  }`}
                  placeholder={t("txt_ingresaContraseña")}
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "La contraseña es requerida",
                    },
                    minLength: {
                      value: 2,
                      message: "La contraseña debe tener al menos 2 caracteres",
                    },
                  })}
                ></input>
                <button
                  type="button"
                  className="input__icon"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>
              {errors.password && <span>{errors.password.message}</span>}

              <button
                className="btn__prin form__btn bg-white roboto-light"
                type="submit"
              >
                {t("btn_ingresar")}
              </button>
              <Link
                to="/recover-password"
                className="cursor-pointer text-center form__btn form__btn--pass"
              >
                {t("btn_olvideContraseña")}
              </Link>
            </div>
          </form>

          <ToastContainer stacked />

          <div
            className={`${
              validateOpciones == 2
                ? "redes flex flex-row justify-center gap-48 my-8 text-transparent"
                : "redes flex flex-row justify-center my-8 text-transparent"
            }
                             ${validateOpciones == 1 && "redes btn__unique"}  `}
          >
            {oauthOptions.map((option) => {
              if (option.active === "SI") {
                return (
                  <>
                    <button
                      id={option.id}
                      className="z-20"
                      onClick={() => definirRutas(option.id)}
                    >
                      <img src={option.icon} alt={option.nombre} />
                    </button>
                  </>
                );
              }
            })}
          </div>
        </section>
        <LinksAyuda />
      </div>