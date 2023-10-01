import { FC } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { IFooterBodyItem } from '../../data';
import { FooterBodyList } from '../FooterBodyList/FooterBodyList';
import { ArrowBottomIcon } from '@/components/Icons/ArrowIcons';

interface FooterBodyAccordionProps {
    column: IFooterBodyItem
}

export const FooterBodyAccordion: FC<FooterBodyAccordionProps> = ({ column }) => {
    return (
        <Accordion  allowMultiple={false} mountOnEnter unmountOnExit transition transitionTimeout={100}>
            <AccordionItem header={<> {column.title} <ArrowBottomIcon /> </>} className="footer-body__accordion" >
                <FooterBodyList column={column} />
            </AccordionItem>
        </Accordion>
    );
};
