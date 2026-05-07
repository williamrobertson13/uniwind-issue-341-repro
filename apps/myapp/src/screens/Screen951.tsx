import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy951 } from '../generated/copy/copy951';
import { layout951 } from '../generated/layouts/layout951';
import { palette951 } from '../generated/palettes/palette951';

const RuntimeView951 = withUniwind(View);

export function Screen951() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView951 styleClassName={layout951.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy951.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy951.detail} / {palette951.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
