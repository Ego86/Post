import styles from "./button.module.scss";
const Button = ({
  className,
  active,
  children,
  ...props
}: {
  className?: string;
  active?: boolean 
  children: React.ReactNode;
}) => {
  if(active){
    return (
      <button  className={`${styles.active} ${className}`} {...props}>
        {children}
      </button>
    );
  }else{
    return (
      <button  className={`${styles.button} ${className}`} {...props}>
        {children}
      </button>
    );
  }
};

export default Button;
