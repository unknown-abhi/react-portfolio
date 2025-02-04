import { forwardRef, HTMLAttributes } from "react";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={`${styles.card} ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
