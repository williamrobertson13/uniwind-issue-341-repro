import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy949 } from '../generated/copy/copy949';
import { layout949 } from '../generated/layouts/layout949';
import { palette949 } from '../generated/palettes/palette949';

const RuntimeView949 = withUniwind(View);

export function Screen949() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView949 styleClassName={layout949.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy949.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy949.detail} / {palette949.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
