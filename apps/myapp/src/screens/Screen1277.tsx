import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1277 } from '../generated/copy/copy1277';
import { layout1277 } from '../generated/layouts/layout1277';
import { palette1277 } from '../generated/palettes/palette1277';

const RuntimeView1277 = withUniwind(View);

export function Screen1277() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1277 styleClassName={layout1277.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1277.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1277.detail} / {palette1277.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
