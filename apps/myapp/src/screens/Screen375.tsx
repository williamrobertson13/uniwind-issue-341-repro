import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy375 } from '../generated/copy/copy375';
import { layout375 } from '../generated/layouts/layout375';
import { palette375 } from '../generated/palettes/palette375';

const RuntimeView375 = withUniwind(View);

export function Screen375() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView375 styleClassName={layout375.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy375.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy375.detail} / {palette375.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
