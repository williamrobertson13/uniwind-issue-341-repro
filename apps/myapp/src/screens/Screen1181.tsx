import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1181 } from '../generated/copy/copy1181';
import { layout1181 } from '../generated/layouts/layout1181';
import { palette1181 } from '../generated/palettes/palette1181';

const RuntimeView1181 = withUniwind(View);

export function Screen1181() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1181 styleClassName={layout1181.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1181.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1181.detail} / {palette1181.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
