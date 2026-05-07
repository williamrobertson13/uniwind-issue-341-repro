import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1346 } from '../generated/copy/copy1346';
import { layout1346 } from '../generated/layouts/layout1346';
import { palette1346 } from '../generated/palettes/palette1346';

const RuntimeView1346 = withUniwind(View);

export function Screen1346() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1346 styleClassName={layout1346.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1346.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1346.detail} / {palette1346.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
