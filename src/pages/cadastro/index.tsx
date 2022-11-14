import BotaoGrande from 'src/components/Botao-grande'
import Cabecalho from 'src/components/Cabecalho'
import Input from 'src/components/Input'
import style from './Cadastro.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import api from 'src/services/api'
import Modal from 'react-modal'

Modal.setAppElement('#__next')
type Inputs = {
  nome: string
  email: string
  senha: string
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0c1828',
    borderRadius: '20px',
  },
}

export default function Cadastro() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [dadosInputs, setDadosInputs] = useState({})
  const [cargoInput, setCargoInput] = useState('')

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function finalizacaoCadastroAdmin() {
    const todosOsDados = {
      ...dadosInputs,
      cargo: cargoInput,
    }

    api({
      method: 'post',
      url: '/admins',
      data: todosOsDados,
    })
      .then((response) => closeModal())
      .catch((error) => console.error(error))
  }

  function preencherCargo(e) {
    setCargoInput(e.target.value)
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({})

  const onSubmit: SubmitHandler<Inputs> = (valorInputs, evento) => {
    const botaoId = evento?.nativeEvent?.submitter?.id

    if (botaoId === 'admin') {
      setDadosInputs(valorInputs)
      openModal()
    } else {
      api({
        method: 'post',
        url: '/alunos',
        data: valorInputs,
      })
        .then((response) => console.log(response))
        .catch((error) => console.error(error))
    }
  }

  return (
    <>
      <Cabecalho />
      <div className={style.corpo}>
        <div className={style.container}>
          <aside className={style.aside_cadastro}>
            <div className={style.aside_conteudo}>
              <h1 className={style.aside_cadastro_titulo}>
                Bem-vindo de volta!
              </h1>
              <p className={style.aside_cadastro_parag}>
                Acesse sua conta agora mesmo.
              </p>
            </div>

            <BotaoGrande
              texto="Entrar"
              cor="#01132B"
              id="cadastro"
              tipo="button"
            />
          </aside>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={style.form_cadastro}
          >
            <h1 className={style.form_cadastro_titulo}>
              Cadastre-se e evolua sua carreira na tecnologia
            </h1>
            <div className={style.form_input}>
              {errors.nome && <span></span>}
              <Input
                texto="Nome"
                tipo="text"
                icone="name"
                {...register('nome', {
                  required: true,
                })}
              />
              {errors.nome?.type === 'required' && (
                <span className={style.erro}>O campo nome é obrigatório!</span>
              )}
              <Input
                texto="Email"
                tipo="email"
                icone="email"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Esse não é um email válido',
                  },
                })}
              />
              {errors.email && errors.email?.type === 'required' && (
                <span className={style.erro}>O campo email é obrigatório!</span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className={style.erro}>{errors.email.message}</span>
              )}

              <Input
                texto="Senha"
                tipo="password"
                icone="password"
                {...register('senha', {
                  required: true,
                  minLength: {
                    value: 6,
                    message: 'A senha deve entre 6 e 12 caracteres',
                  },
                  maxLength: {
                    value: 12,
                    message: 'A senha deve entre 6 e 12 caracteres',
                  },
                })}
              />
              {errors.senha?.type === 'required' && (
                <span className={style.erro}>O campo senha é obrigatório!</span>
              )}
              {errors.senha?.type === 'minLength' && (
                <span className={style.erro}>{errors.senha.message}</span>
              )}
              {errors.senha?.type === 'maxLength' && (
                <span className={style.erro}>{errors.senha.message}</span>
              )}
            </div>

            <div className={style.form_botoes}>
              <BotaoGrande
                texto="Ensinar"
                cor="#2B73BF"
                id="admin"
                tipo="submit"
              />
              <BotaoGrande
                texto="Aprender"
                cor="#4A49C7"
                id="aluno"
                tipo="submit"
              />
            </div>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className={style.modal_container}>
                <h2 className={style.modal_titulo}>
                  Olá, admin! Digite seu cargo.
                </h2>
                <div className={style.cargo}>
                  <label className={style.cargo_texto} htmlFor="cargo">
                    Cargo:
                  </label>
                  <input
                    className={style.input}
                    type="text"
                    id="cargo"
                    onChange={preencherCargo}
                  />
                </div>
                <a title="Fechar" className={style.fechar} onClick={closeModal}>
                  x
                </a>

                <button
                  className={style.botao}
                  onClick={finalizacaoCadastroAdmin}
                >
                  Ok
                </button>
              </div>
            </Modal>
          </form>
        </div>
      </div>
    </>
  )
}
