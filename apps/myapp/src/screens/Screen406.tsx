import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy406 } from '../generated/copy/copy406';
import { layout406 } from '../generated/layouts/layout406';
import { palette406 } from '../generated/palettes/palette406';

const RuntimeView406 = withUniwind(View);

export function Screen406() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView406 styleClassName={layout406.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy406.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy406.detail} / {palette406.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
