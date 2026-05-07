import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy79 } from '../generated/copy/copy79';
import { layout79 } from '../generated/layouts/layout79';
import { palette79 } from '../generated/palettes/palette79';

const RuntimeView79 = withUniwind(View);

export function Screen79() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView79 styleClassName={layout79.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy79.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy79.detail} / {palette79.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
