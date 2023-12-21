import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
// import { withTranslation } from 'react-i18next';

describe('Sidebar', () => {
    test('with only first param', () => {
        /*         const SidebarWithTranslation = withTranslation()(Sidebar);
                render(<SidebarWithTranslation />); */
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    });
});
