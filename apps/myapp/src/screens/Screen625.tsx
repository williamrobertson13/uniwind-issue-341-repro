import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy625 } from '../generated/copy/copy625';
import { layout625 } from '../generated/layouts/layout625';
import { palette625 } from '../generated/palettes/palette625';

const RuntimeView625 = withUniwind(View);

export function Screen625() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView625 styleClassName={layout625.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy625.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy625.detail} / {palette625.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
