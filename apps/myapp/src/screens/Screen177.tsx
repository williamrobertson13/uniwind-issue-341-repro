import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy177 } from '../generated/copy/copy177';
import { layout177 } from '../generated/layouts/layout177';
import { palette177 } from '../generated/palettes/palette177';

const RuntimeView177 = withUniwind(View);

export function Screen177() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView177 styleClassName={layout177.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy177.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy177.detail} / {palette177.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
