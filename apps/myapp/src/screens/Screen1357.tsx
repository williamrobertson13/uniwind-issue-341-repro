import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1357 } from '../generated/copy/copy1357';
import { layout1357 } from '../generated/layouts/layout1357';
import { palette1357 } from '../generated/palettes/palette1357';

const RuntimeView1357 = withUniwind(View);

export function Screen1357() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1357 styleClassName={layout1357.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1357.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1357.detail} / {palette1357.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
