import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy599 } from '../generated/copy/copy599';
import { layout599 } from '../generated/layouts/layout599';
import { palette599 } from '../generated/palettes/palette599';

const RuntimeView599 = withUniwind(View);

export function Screen599() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView599 styleClassName={layout599.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy599.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy599.detail} / {palette599.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
