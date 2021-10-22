import React from 'react';

/** Para que não seja necessário usar repetidamente 
 * componentes em cada tela, foi feito um layout padrão
 * que cada tela é implementada dentro dele
 */
export const Layout = ({ children }) => {
    return <div className="layout">
        {children}
    </div>
}
