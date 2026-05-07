import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1237 } from '../generated/copy/copy1237';
import { layout1237 } from '../generated/layouts/layout1237';
import { palette1237 } from '../generated/palettes/palette1237';

const RuntimeView1237 = withUniwind(View);

export function Screen1237() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1237 styleClassName={layout1237.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1237.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1237.detail} / {palette1237.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
