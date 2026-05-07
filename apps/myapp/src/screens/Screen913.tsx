import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy913 } from '../generated/copy/copy913';
import { layout913 } from '../generated/layouts/layout913';
import { palette913 } from '../generated/palettes/palette913';

const RuntimeView913 = withUniwind(View);

export function Screen913() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView913 styleClassName={layout913.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy913.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy913.detail} / {palette913.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
