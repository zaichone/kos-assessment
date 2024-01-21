"use client"
import Image from 'next/image'

import styles from './page.module.css'
import SSRProvider from 'react-bootstrap/SSRProvider';

import LoginIcon from '@mui/icons-material/Login';
import { FaFacebookF, FaGoogle, FaTwitter, FaEye, FaLock ,FaEnvelope   } from "react-icons/fa";

import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <SSRProvider>
      <main className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.cover}>

            <div>

              <Image
                src="/logoHeader.png"
                alt="Logo"
                className={styles.logoHeader}
                width={276}
                height={30}
                priority
              />

            </div>
          </div>

          <div className={styles.contact}>

            <div>
              <Image
                src="/sticker.png"
                alt="Sticker"
                className={styles.sticker}
                width={80}
                height={80}
                priority
              />
            </div>
            <div className={styles.formWrap}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ color: '#E1E2E2', fontSize: 18, fontWeight: 'bold' }}>LOG IN</h3>
                <Image
                  src="/Hamburger Button.png"
                  alt="Hamburger Button"

                  width={40}
                  height={40}
                  priority
                />
              </div>
              <hr />
              <h4>Email address</h4>
              <InputGroup className="mb-3">
                <InputGroup.Text><FaEnvelope  /></InputGroup.Text>
                <Form.Control aria-label="Email" placeholder="Email" />

              </InputGroup>
              <h4>Password</h4>
              <InputGroup className="mb-1">
                <InputGroup.Text><FaLock  /></InputGroup.Text>
                <Form.Control aria-label="Password" placeholder="Password" />
                <InputGroup.Text><FaEye  /></InputGroup.Text>
              </InputGroup>
              <h4 className="mt-2">A number or symbol, atleast 6 characters</h4>
              <div className="mt-3 formFooter">
                <button className="register">Register</button>
                <button className="login"><LoginIcon />Login</button>
              </div>
              <h4 className="text-end mt-2 mb-2">Forgot password?</h4>
              <div className="mt-3 d-flex justify-content-between options">
                <h4>OR Log in with</h4>
                <hr />
              </div>
              <div className="socials mt-5">
                <span><FaFacebookF /></span>
                <span> <FaGoogle /></span>
                <span> <FaTwitter /></span>
                <span> <Image
                  src="/fox.svg"
                  alt="Fox face"
                  className={styles.logoHeader}
                  width={25}
                  height={25}
                  priority
                /></span>
              </div>

            </div>
            <div className={styles.credit}>
              <p>Copyright 2022 © Nakamoto Games</p>
            </div>
          </div>

        </div>
      </main>
    </SSRProvider>
  )
}
