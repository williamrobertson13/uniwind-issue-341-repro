import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy111 } from '../generated/copy/copy111';
import { layout111 } from '../generated/layouts/layout111';
import { palette111 } from '../generated/palettes/palette111';

const RuntimeView111 = withUniwind(View);

export function Screen111() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView111 styleClassName={layout111.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy111.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy111.detail} / {palette111.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
