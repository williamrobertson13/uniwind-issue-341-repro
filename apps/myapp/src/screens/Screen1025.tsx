import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1025 } from '../generated/copy/copy1025';
import { layout1025 } from '../generated/layouts/layout1025';
import { palette1025 } from '../generated/palettes/palette1025';

const RuntimeView1025 = withUniwind(View);

export function Screen1025() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1025 styleClassName={layout1025.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1025.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1025.detail} / {palette1025.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
