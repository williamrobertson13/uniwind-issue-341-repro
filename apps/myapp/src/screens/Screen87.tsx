import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy87 } from '../generated/copy/copy87';
import { layout87 } from '../generated/layouts/layout87';
import { palette87 } from '../generated/palettes/palette87';

const RuntimeView87 = withUniwind(View);

export function Screen87() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView87 styleClassName={layout87.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy87.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy87.detail} / {palette87.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
