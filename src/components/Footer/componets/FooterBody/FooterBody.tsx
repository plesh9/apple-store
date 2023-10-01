import { FC } from 'react';
import { FooterBodyColumn } from './FooterBodyColumn/FooterBodyColumn';
import { footerBodyColumns } from './data';

export const FooterBody: FC = () => {
    return (
        <div className="footer__body footer-body">
            <div className="footer-body__container">
                <div className="footer-body__columns">
                    {footerBodyColumns.map((columns, index) => <FooterBodyColumn columns={columns} key={index} />)}
                </div>
            </div>
        </div>
    );
};
