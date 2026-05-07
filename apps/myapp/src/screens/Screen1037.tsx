import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1037 } from '../generated/copy/copy1037';
import { layout1037 } from '../generated/layouts/layout1037';
import { palette1037 } from '../generated/palettes/palette1037';

const RuntimeView1037 = withUniwind(View);

export function Screen1037() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1037 styleClassName={layout1037.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1037.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1037.detail} / {palette1037.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
