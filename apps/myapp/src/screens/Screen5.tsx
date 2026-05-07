import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy5 } from '../generated/copy/copy5';
import { layout5 } from '../generated/layouts/layout5';
import { palette5 } from '../generated/palettes/palette5';

const RuntimeView5 = withUniwind(View);

export function Screen5() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView5 styleClassName={layout5.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy5.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy5.detail} / {palette5.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
