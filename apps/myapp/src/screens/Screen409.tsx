import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy409 } from '../generated/copy/copy409';
import { layout409 } from '../generated/layouts/layout409';
import { palette409 } from '../generated/palettes/palette409';

const RuntimeView409 = withUniwind(View);

export function Screen409() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView409 styleClassName={layout409.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy409.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy409.detail} / {palette409.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
