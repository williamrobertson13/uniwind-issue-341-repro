import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1013 } from '../generated/copy/copy1013';
import { layout1013 } from '../generated/layouts/layout1013';
import { palette1013 } from '../generated/palettes/palette1013';

const RuntimeView1013 = withUniwind(View);

export function Screen1013() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1013 styleClassName={layout1013.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1013.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1013.detail} / {palette1013.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
