import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy90 } from '../generated/copy/copy90';
import { layout90 } from '../generated/layouts/layout90';
import { palette90 } from '../generated/palettes/palette90';

const RuntimeView90 = withUniwind(View);

export function Screen90() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView90 styleClassName={layout90.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy90.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy90.detail} / {palette90.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
