import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1045 } from '../generated/copy/copy1045';
import { layout1045 } from '../generated/layouts/layout1045';
import { palette1045 } from '../generated/palettes/palette1045';

const RuntimeView1045 = withUniwind(View);

export function Screen1045() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1045 styleClassName={layout1045.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1045.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1045.detail} / {palette1045.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
