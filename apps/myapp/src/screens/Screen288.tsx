import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy288 } from '../generated/copy/copy288';
import { layout288 } from '../generated/layouts/layout288';
import { palette288 } from '../generated/palettes/palette288';

const RuntimeView288 = withUniwind(View);

export function Screen288() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView288 styleClassName={layout288.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy288.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy288.detail} / {palette288.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
