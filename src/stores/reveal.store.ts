import { create } from 'zustand';

type State = {
	visibleLabelsList: Set<string>
}

type Action = {
	addToVisibleLabelsList: (label:string)=> void
	removeFromVisibleLabelsList: (label:string)=> void
}

export const useRevealStore = create<State & Action>((set)=>({
	visibleLabelsList: new Set(),
	addToVisibleLabelsList:(label)=>{
		return set((state)=>{
			return {
				visibleLabelsList: new Set(state.visibleLabelsList)
					.add(label)
			};
		});

	},
	removeFromVisibleLabelsList:(label)=>{
		return set((state)=>{
			const updated = new Set(state.visibleLabelsList);

			updated.delete(label);

			return {visibleLabelsList: updated};
		});

	},

}));

