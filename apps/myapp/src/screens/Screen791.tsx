import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy791 } from '../generated/copy/copy791';
import { layout791 } from '../generated/layouts/layout791';
import { palette791 } from '../generated/palettes/palette791';

const RuntimeView791 = withUniwind(View);

export function Screen791() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView791 styleClassName={layout791.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy791.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy791.detail} / {palette791.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
