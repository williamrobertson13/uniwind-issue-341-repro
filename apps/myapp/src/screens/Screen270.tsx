import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy270 } from '../generated/copy/copy270';
import { layout270 } from '../generated/layouts/layout270';
import { palette270 } from '../generated/palettes/palette270';

const RuntimeView270 = withUniwind(View);

export function Screen270() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView270 styleClassName={layout270.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy270.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy270.detail} / {palette270.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
