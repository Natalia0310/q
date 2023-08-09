import styled from 'styled-components';

export const FormStyled = styled.form`
  
  font-size: 20px;
  font-weight: 600;
  
  color: var(--dark-clr-2);
  & input {
    margin-left: var(--default-margin);
     padding: 5px 10px;
    
    font-size: 16px;
    font-weight: 600;
    
    border: 2px dashed var(--light-clr-2);
    background-color: inherit;
  }

  & .name {
    
    margin-bottom: var(--default-margin);
  }

  & button {
    margin-top: var(--default-margin);
    //   padding: 5px 15px;
    
    //   border: none;
    //   outline: none;
    //   cursor: pointer;
    //   border: var(--default-border);
    
    //   font-size: 16px;
    //   font-weight: 600;
    
    //   color: var(--dark-clr-2);
    //   background-color: var(--light-clr-2);  
  }

  
`;

