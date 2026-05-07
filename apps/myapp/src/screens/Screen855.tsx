import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy855 } from '../generated/copy/copy855';
import { layout855 } from '../generated/layouts/layout855';
import { palette855 } from '../generated/palettes/palette855';

const RuntimeView855 = withUniwind(View);

export function Screen855() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView855 styleClassName={layout855.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy855.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy855.detail} / {palette855.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
