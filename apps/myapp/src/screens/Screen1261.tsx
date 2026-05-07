import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1261 } from '../generated/copy/copy1261';
import { layout1261 } from '../generated/layouts/layout1261';
import { palette1261 } from '../generated/palettes/palette1261';

const RuntimeView1261 = withUniwind(View);

export function Screen1261() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1261 styleClassName={layout1261.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1261.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1261.detail} / {palette1261.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
