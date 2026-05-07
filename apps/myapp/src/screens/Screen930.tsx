import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy930 } from '../generated/copy/copy930';
import { layout930 } from '../generated/layouts/layout930';
import { palette930 } from '../generated/palettes/palette930';

const RuntimeView930 = withUniwind(View);

export function Screen930() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView930 styleClassName={layout930.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy930.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy930.detail} / {palette930.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
