import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy109 } from '../generated/copy/copy109';
import { layout109 } from '../generated/layouts/layout109';
import { palette109 } from '../generated/palettes/palette109';

const RuntimeView109 = withUniwind(View);

export function Screen109() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView109 styleClassName={layout109.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy109.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy109.detail} / {palette109.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
