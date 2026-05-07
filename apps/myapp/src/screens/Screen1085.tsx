import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1085 } from '../generated/copy/copy1085';
import { layout1085 } from '../generated/layouts/layout1085';
import { palette1085 } from '../generated/palettes/palette1085';

const RuntimeView1085 = withUniwind(View);

export function Screen1085() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1085 styleClassName={layout1085.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1085.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1085.detail} / {palette1085.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
