import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => <div>
        <form><label>First name:</label><br /><input type="text" /><br /><label>Last name:</label><br /><input type="text" autoFocus={true} /><br /><br /><input type="submit" value="Submit" />
            <select><option>Apple</option><option>Banana</option><option>Watermelon</option></select>
        </form>
    </div>,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 137,
        canvasHeight: 282
    }
});
