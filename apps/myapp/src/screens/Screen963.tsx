import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy963 } from '../generated/copy/copy963';
import { layout963 } from '../generated/layouts/layout963';
import { palette963 } from '../generated/palettes/palette963';

const RuntimeView963 = withUniwind(View);

export function Screen963() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView963 styleClassName={layout963.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy963.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy963.detail} / {palette963.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
