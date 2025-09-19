"use client";

import Link from "next/link";
import styles from "./Card.module.css";

type CardButton = {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

type CardProps = {
  title: string;
  children: React.ReactNode;
  buttons?: CardButton[];
};

const Card = ({ title, children, buttons }: CardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardContent}>{children}</div>
      {buttons && buttons.length > 0 && (
        <div className={styles.cardActions}>
          {buttons.map((button, index) => (
            <div key={index}>
              {button.href ? (
                <Link
                  href={button.href}
                  className={`${styles.cardButton} ${
                    button.variant === "secondary"
                      ? styles.cardButtonSecondary
                      : styles.cardButtonPrimary
                  }`}
                >
                  {button.text}
                </Link>
              ) : (
                <button
                  onClick={button.onClick}
                  className={`${styles.cardButton} ${
                    button.variant === "secondary"
                      ? styles.cardButtonSecondary
                      : styles.cardButtonPrimary
                  }`}
                >
                  {button.text}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
