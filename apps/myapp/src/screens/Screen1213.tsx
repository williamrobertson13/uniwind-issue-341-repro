import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1213 } from '../generated/copy/copy1213';
import { layout1213 } from '../generated/layouts/layout1213';
import { palette1213 } from '../generated/palettes/palette1213';

const RuntimeView1213 = withUniwind(View);

export function Screen1213() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1213 styleClassName={layout1213.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1213.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1213.detail} / {palette1213.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
